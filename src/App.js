import { useState } from "react";
import "./styles.css";

const emojipedia = {
  "😂": "Face with Tears of Joy",
  "😭": "Loudly Crying Face",
  "🥺": "Pleading Face",
  "🤣": "Rolling on the Floor Laughing",
  "🖤": "Black Heart",
  "✨": "Sparkles",
  "😍": "Smiling Face with Heart-Eyes",
  "🙏": "Folded Hands",
  "😊": "Smiling Face with Smiling Eyes",
  "🥰": "Smiling Face with Hearts"
};

const emojis = Object.keys(emojipedia);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojipedia) {
      setMeaning(emojipedia[inputEmoji]);
    } else {
      setMeaning("Sorry we dont have this emoji yet");
    }
  }

  function onClickHandler(inputEmoji) {
    setMeaning(emojipedia[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>Emojicons</h1>
      <input
        value={emoji}
        placeholder="Enter Emoticons"
        className="input"
        onChange={onChangeHandler}
      />
      <h3> {emoji} </h3>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span className="style-emoji" onClick={() => onClickHandler(emoji)}>
          {emoji}
        </span>
      ))}
    </div>
  );
}
