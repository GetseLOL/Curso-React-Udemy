import PropTypes from "prop-types";

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

/**
 * Tarea
 * 1. Añadir props
 *  a. Titulo obligatorio
 *  b. URL obligatorio
 *
 * 2. Evaluar snapshot
 */
