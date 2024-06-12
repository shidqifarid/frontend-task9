import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import Button from "../UI/Button";

function AddMovieForm(props) {
  const [formValues, setFormValues] = useState({
    title: "",
    date: "",
    image: "",
    type: ""
  });
  const [formErrors, setFormErrors] = useState({
    title: false,
    date: false,
    image: false,
    type: false
  });

  const { movies, setMovies } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, date, image, type } = formValues;

    const errors = {
      title: title === "",
      date: date === "",
      image: image === "",
      type: type === ""
    };

    setFormErrors(errors);

    if (!errors.title && !errors.date && !errors.image && !errors.type) {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: type,
        poster: image,
      };
      setMovies([...movies, movie]);

      setFormValues({
        title: "",
        date: "",
        image: "",
        type: ""
      });
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.formLeft}>
          <img
            className={styles.formImage}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.formRight}>
          <h2 className={styles.formTitle}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.formLabel}>
                Title
              </label>
              <input
                id="title"
                className={styles.formInput}
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleChange}
              />
              {formErrors.title && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="date" className={styles.formLabel}>
                Date
              </label>
              <input
                id="date"
                className={styles.formInput}
                type="text"
                name="date"
                value={formValues.date}
                onChange={handleChange}
              />
              {formErrors.date && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="image" className={styles.formLabel}>
                Image Link
              </label>
              <input
                id="image"
                className={styles.formInput}
                type="text"
                name="image"
                value={formValues.image}
                onChange={handleChange}
              />
              {formErrors.image && <Alert>Link Gambar Wajib Diisi</Alert>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="type" className={styles.formLabel}>
                Type
              </label>
              <select
                id="type"
                className={styles.formInput}
                name="type"
                value={formValues.type}
                onChange={handleChange}
              >
                <option value="">Pilih Jenis Film</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
              </select>
              {formErrors.type && <Alert>Jenis Film Wajib Dipilih</Alert>}
            </div>
            <div>
              <Button variant="secondary" full>
                Add Movie
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
