import "./List.css";
import Card from "./Card";

function List() {
  return (
    <>
      <div className="list" id="applist">
        <h1> App list</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          excepturi esse in beatae dolores dolore et sequi omnis est facilis
          consequuntur numquam mollitia perspiciatis porro qui minus odit,
          aspernatur ut.
        </p>
        <div className="approw">
          <Card title="Aplikasi Belanja">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
            magnam?
          </Card>
          <Card title="Aplikasi Wishlist">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            praesentium minus mollitia? Suscipit, cumque?
          </Card>
          <Card title="Aplikasi Tugas">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Doloribus?
          </Card>
        </div>
      </div>
    </>
  );
}

export default List;
