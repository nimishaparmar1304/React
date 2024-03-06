import { QUESTIONS } from "../data";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import "./Faq.css";

export default function Faq({actualSelected,question,onSelect,answer,id})

{
    const displayStyle = actualSelected !== id ? { display: "none" } : {};
    const displayImg = actualSelected !== id ? plusIcon : minusIcon;

    return (
        <li className="questionAns">
            <div onClick={() =>  onSelect(id)} className="Questiontitle">
            <h2>{question}</h2>
            <img className="imageIcon" src={displayImg} alt='quest action icon' />
            </div>
            <p className="answer-styled" style={displayStyle}>
                {answer}
            </p>
        </li>
    );

}