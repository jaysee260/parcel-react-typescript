import * as React from 'react';

interface State {};
interface Props {
  compiler: String,
  framework: String,
  bundler: String,
  styles: String
};

export default class App extends React.Component<Props, State> {
  render() {
    let { compiler, framework, bundler, styles } = this.props;
    return(
      <div className="content">
        <h1>Parcel is freaking awesome</h1>
        <p>I'm a very simple web application that uses {compiler} and {framework} with <a target="_target" href="https://parceljs.org/getting_started.html">{bundler}</a>
        </p>
        <p>{bundler} is AMAZING. It supports {styles} and {compiler} compilation OUT OF THE BOX</p>
      </div>
    )
  }
}