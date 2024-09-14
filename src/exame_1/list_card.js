function List_card() {
  return (
    <div className="row">
      {/* Card */}
      <div className="col-md-4">
        <div className="card text-white bg-primary">
          <img
            className="card-img-top"
            src="https://www.w3schools.com/bootstrap5/img_avatar3.png"
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-primary">
          <img
            className="card-img-top"
            src="https://www.w3schools.com/bootstrap5/img_avatar3.png"
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-primary">
          <img
            className="card-img-top"
            src="https://www.w3schools.com/bootstrap5/img_avatar3.png"
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List_card;
