document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM полностью загружен");

  const elements = document.querySelectorAll(".contact-info__input-element");

  elements.forEach((element) => {
    const enter = element.querySelector("input, textarea");
    const label = element.querySelector("label");

    enter.addEventListener("input", () => {
      if (enter.value) {
        element.classList.remove("warning");
        enter.classList.remove("warning");
        label.classList.remove("warning");
      }
    });
  });

  document
    .querySelector(".contact-info__button")
    .addEventListener("click", async (event) => {
      event.preventDefault();

      let allFilled = true;
      const formData = {};

      Array.from(elements).forEach((element) => {
        const enter = element.querySelector("input, textarea");
        const label = element.querySelector("label");

        const key = label.getAttribute("for");
        if (!enter.value) {
          allFilled = false;
          element.classList.toggle("warning");
          enter.classList.toggle("warning");
          label.classList.toggle("warning");
        } else {
          if (key === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(enter.value)) {
              allFilled = false;
              element.classList.toggle("email-warning");
              enter.classList.toggle("warning");
              label.classList.toggle("warning");
            } else {
              formData[key] = enter.value;
            }
          } else {
            formData[key] = enter.value;
          }
        }
      });

      if (allFilled) {
        Array.from(elements).forEach((element) => {
          const enter = element.querySelector("input, textarea");
          const label = element.querySelector("label");

          element.classList.remove("warning");
          element.classList.remove("email-warning");
          enter.classList.remove("warning");
          label.classList.remove("warning");
        });
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );

          if (!response.ok) {
            throw new Error(` Ошибка со статусом: ${response.status}`);
          }

          const data = await response.json();

          console.log(` Данные успешно отправлены:, ${JSON.stringify(data)}`);

          Array.from(elements).forEach((element) => {
            const enter = element.querySelector("input, textarea");
            enter.value = "";
          });
        } catch (error) {
          console.log(` Ошибка со статусом: ${error.message}`);
        }
      } else {
        console.log("Ошибка отправки пустых полей ввода!");
      }
    });
});
