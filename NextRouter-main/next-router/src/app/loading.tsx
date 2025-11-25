import "./loading.css";

interface LoadingProps {
  type?: "spinner" | "pulse" | "dots";
  text?: string;
  pageLoading?: boolean;
}

const Loading = ({ type = "spinner", text = "Loading...", pageLoading = false }: LoadingProps) => {
  if (pageLoading) {
    return (
      <div className="page-loading">
        {type === "spinner" && <span className="loader"></span>}
        {type === "pulse" && <span className="loader-pulse"></span>}
        {type === "dots" && (
          <div className="loader-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <p className="loading-text">{text}</p>
      </div>
    );
  }

  return (
    <div className="loading-container">
      {type === "spinner" && <span className="loader"></span>}
      {type === "pulse" && <span className="loader-pulse"></span>}
      {type === "dots" && (
        <div className="loader-dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <p className="loading-text">{text}</p>
    </div>
  );
};

export default Loading;