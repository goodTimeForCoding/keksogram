const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const addUserFoto = (form, image) => {
  const file = form.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      image.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
}

export {addUserFoto}
