import negative from "../../assets/sentiments/negative.svg";
import neutral from "../../assets/sentiments/neutral.svg";
import positive from "../../assets/sentiments/positive.svg";

const Sentiment = ({ sentiment }) => {
  const getImage = () => {
    switch (sentiment) {
      case "positive":
        return positive;
      case "neutral":
        return neutral;
      case "negative":
        return negative;
    }
  };
  return <img className="lg:ml-4 h-5 w-auto" src={getImage(sentiment)} alt="" />;
};

export default Sentiment;
