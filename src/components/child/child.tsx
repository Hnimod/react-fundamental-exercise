type Props = {
  messages: string[];
  onClickMessage: (s: string) => void;
};

const Child = ({ messages, onClickMessage }: Props) => {
  const handleMessage = (message: string) => {
    onClickMessage(message);
  };

  return (
    <ul>
      {messages.length > 0 &&
        messages.map((message, index) => (
          <p key={index} onClick={() => handleMessage(message)}>
            {message}
          </p>
        ))}
    </ul>
  );
};

export default Child;
