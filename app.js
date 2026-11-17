const videoInput = document.querySelector("#videoInput");
const videoPreview = document.querySelector("#videoPreview");
const videoMeta = document.querySelector("#videoMeta");
const consentCheck = document.querySelector("#consentCheck");
const processButton = document.querySelector("#processButton");
const buttonNote = document.querySelector("#buttonNote");

const objectUrls = [];
function previewFile(input, preview, placeholder, isVideo = false) {
  input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    objectUrls.push(url);
    preview.src = url;
    preview.hidden = false;
    if (placeholder) placeholder.hidden = true;
    if (isVideo) {
      videoMeta.hidden = false;
      videoMeta.textContent = file.name + " · " + (file.size / 1024 / 1024).toFixed(1) + " МБ";
    }
  });
}

previewFile(videoInput, videoPreview, null, true);
previewFile(
  document.querySelector("#faceOneInput"),
  document.querySelector("#faceOnePreview"),
  document.querySelector("#faceOnePlaceholder")
);
previewFile(
  document.querySelector("#faceTwoInput"),
  document.querySelector("#faceTwoPreview"),
  document.querySelector("#faceTwoPlaceholder")
);

consentCheck.addEventListener("change", () => {
  if (consentCheck.checked) {
    buttonNote.textContent = "Согласие отмечено. Функция обработки ещё не подключена.";
  } else {
    buttonNote.textContent = "Сейчас можно проверить загрузку и предпросмотр файлов.";
  }
});

// Preview-only build: no media is uploaded and no face-swap job is started.
window.addEventListener("beforeunload", () => {
  objectUrls.forEach((url) => URL.revokeObjectURL(url));
});
