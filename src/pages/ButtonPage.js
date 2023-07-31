import { GoBell, GoDatabase, GoCloudDownload } from "react-icons/go";
import Button from "../components/Button";
function ButtonPage() {
  const handleClick = () => {
    // console.log('Clicked!');
  };

  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button secondary className="mb-5">
          <GoCloudDownload />
          Buy Now!!
        </Button>
      </div>
      <div>
        <Button success outline>
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning onMouseEnter={handleClick}>
          <GoDatabase />
          Hide Ads
        </Button>
      </div>
      <div>
        <Button danger rounded outline onMouseLeave={handleClick}>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
