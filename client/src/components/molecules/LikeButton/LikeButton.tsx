import { AiOutlineLike } from "react-icons/ai";
import Button from "../../ui/Button";

export default function LikeButton() {
  return (
    <Button className="rounded" variant="ghost">
      <AiOutlineLike />
      Like
    </Button>
  );
}
