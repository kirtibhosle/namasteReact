const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "childChildH1" }, "I am child childH1"),
    React.createElement("h2", { id: "childChildH2" }, "I am child childH2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "childChildSH1" }, "I am child childSHH1"),
    React.createElement("h2", { id: "childChildSH2" }, "I am child childSHH2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
