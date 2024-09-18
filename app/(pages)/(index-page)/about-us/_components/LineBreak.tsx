export default function LineBreak() {
  return (
    <hr
      style={{
        width: '80vw' /* 80% of the viewport width */,
        border: 'none' /* Remove default border */,
        borderTop: '1px solid #ccc' /* Add a top border */,
        margin:
          '5rem auto' /* Center horizontally with top and bottom margin */,
        backgroundColor: 'transparent',
      }}
    ></hr>
  );
}
