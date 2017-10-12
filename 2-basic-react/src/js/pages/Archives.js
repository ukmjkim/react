import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
    render() {
        const { query } = this.props.location;
        const { params } = this.props;
        const { article } = params;
        const { date, filter } = query;

        // const Articles = [
        //     "Some Article",
        //     "Some Other Article",
        //     "Yet Another Article",
        //     "Still More",
        //     "Fake Article",
        //     "Partial Article",
        //     "American Article",
        //     "Mexican Article",
        //   ].map((title, i) => <Article key={i} title={title}/> );

        const Articles = [
            <Article key={1} title={"some title 1"}/>,
            <Article key={2} title={"some title 2"}/>,
            <Article key={3} title={"some title 3"}/>,
            <Article key={4} title={"some title 4"}/>,
            <Article key={5} title={"some title 5"}/>,
            <Article key={6} title={"some title 6"}/>,
        ]

        return (
            <div>
              <h1>Archives</h1>
              article: {article}, date: {date}, filter: {filter}
              <div class="row">{Articles}</div>
            </div>
        );
    }
}