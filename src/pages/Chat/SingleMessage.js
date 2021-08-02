const SingleMessage = ({ message, user }) => {
     return (
          <div
               key={message.uuid}
               className={
                    message.from === user.username ? "user right" : "user left"
               }
          >
               <p>{message.content}</p>
          </div>
     );
};

export default SingleMessage;
