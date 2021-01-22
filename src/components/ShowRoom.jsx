import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkFetchAction } from "../redux/index";

const ShowRoom = () => {
  const picture = useSelector((state) => state.showRoomPicture);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkFetchAction());
  }, []);

  return (
    <div className="comp">
      <h1>SHOW ROOM</h1>
      <img alt="cool cats !!!" src={picture} width="100%" />
    </div>
  );
};
export default ShowRoom;
