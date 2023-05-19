import Input from "./Input";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../styles/Form.scss";
import Button from "@mui/material/Button";

const Form = ({ onSubmit, email, pass, secondPass, addAccount = false }) => {
  return (
    <div className={classNames("form")}>
      <h2 className="form__title">
        Welcome to <br /> Yelp app
      </h2>
      <form
        onSubmit={onSubmit}
        className={classNames("form__container")}
        style={{ height: addAccount ? "404px" : "465px" }}
      >
        <Input
          label="Email"
          placeholder="test@gmail.com"
          name="email"
          value={email.value}
          onChange={email.onChange}
          className={classNames("form__input")}
        />
        <Input
          label="Password"
          placeholder="***************"
          name="password"
          type="password"
          value={pass.value}
          onChange={pass.onChange}
          className={classNames("form__input")}
        />
        {secondPass && (
          <Input
            label="Confirm password"
            placeholder="***************"
            name="passSecond"
            type="password"
            value={secondPass.value}
            onChange={secondPass.onChange}
            className={classNames("form__input")}
          />
        )}
        <div className={classNames("form__buttons")}>
          <Button
            variant="contained"
            type="submit"
            className={classNames("form__button")}
          >
            <span>{addAccount ? "Login" : "Register"}</span>
          </Button>

          {addAccount && (
            <Link to="/reg" className="form__link">
              <Button
                variant="text"
                type="submit"
                sx={{
                  marginTop: "10px",
                  backgroundColor: "transparent",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                className="form__link-button"
              >
                <span className="form__link-text">don't have an account</span>
              </Button>
            </Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
