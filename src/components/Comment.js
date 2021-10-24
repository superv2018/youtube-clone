const comments = [
  {
    id: 1,
    name: "Matt",
    text: "How artistic",
    time: "Today at 5:42PM",
  },
  { id: 2, name: "Sam", text: "Super GOAT!", time: "Today at 1:09PM" },
  {
    id: 3,
    name: "Victor",
    text: "The greatest!",
    time: "Yesterday at 11:09PM",
  },
  {
    id: 4,
    name: "Nat",
    text: "World best!",
    time: "Today at 9:00AM",
  },
];

const Comment = () => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="ui comments">
          <h3 className="ui dividing header">Comments</h3>
          <div className="comment">
            <a className="avatar" href="https://github.com/superv2018">
              <img
                alt="randompicture"
                src="https://picsum.photos/200/300?random=1"
              />
            </a>
            <div className="content">
              <a href="https://github.com/superv2018" className="author">
                {comment.name}
              </a>
              <div className="metadata">
                <span className="date">{comment.time}</span>
              </div>
              <div className="text">{comment.text}</div>
              <div className="actions">
                <a href="https://github.com/superv2018" className="reply">
                  Reply
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
