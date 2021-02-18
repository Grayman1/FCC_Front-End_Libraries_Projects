function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const onLoadState = `
**Bolded text Example**

**This is bolded text**

**H1 header**

# Programmed by Grayman1

**H2 sub-header**

## Build a Markdown Previewer

**Link Example**

[Learn more about programming at FreeCodeCamp](http://freeecodecamp.org)

**Image Example**

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

**Blockquote example**
> Run for an elected position.

** List element example**
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

**Inline code example**

\`Thank you for visiting\`

**Code block example**

\`\`\`
<html>
  <head>
  </head>
</html>
\`\`\`

**Unordered list example**

- Code
- All 
- Day
**Blockquote example**

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
Quote break.


`;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      markText: onLoadState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        markText: e.target.value });

    });}

  render() {
    const { markText } = this.state;

    const markdown = marked(markText, { breaks: true });


    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", { className: "text-center m-3" }, "A Simple Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-center" }, "Enter Your Markdown Below:"), /*#__PURE__*/
      React.createElement("textarea", { className: "form-control editor rounded p-2", id: "editor", value: markText, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-center" }, "View Converted Markdown Below:"), /*#__PURE__*/
      React.createElement("div", { id: "preview", className: "preview rounded p-2", dangerouslySetInnerHTML: { __html: markdown } })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));