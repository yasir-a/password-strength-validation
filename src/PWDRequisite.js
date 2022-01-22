const PWDRequisite = ({
  capsLetterFlag,
  numberFlag,
  pwdLengthFlag,
  specialCharFlag,
}) => {
  return (
    <div className="message">
      <p className={capsLetterFlag}>Must contain 1 Capital Letter</p>
      <p className={numberFlag}>Must contain number</p>
      <p className={pwdLengthFlag}>Must be 8 Chars long</p>
      <p className={specialCharFlag}> Must contain special character</p>
    </div>
  );
};

export default PWDRequisite;
