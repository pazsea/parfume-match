function RatingWrapper({ handleSubmit, handleChange, textFirebase }) {
  const [editText, setEditText] = useState(textFirebase);

  function textChange(e) {
    const text = e.target.value;
    setEditText(text);
  }

  return (
    <Fragment>
      <s.RatingForm onSubmit={handleSubmit}>
        <s.RatingBox
          type="text"
          className="ratingBox"
          value={editText}
          onChange={e => textChange(e)}
        />

        <s.RatingButton
          className="ratingButton"
          type="submit"
          value="Submit"
        />
      </s.RatingForm>
    </Fragment>
  );
}
