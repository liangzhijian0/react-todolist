import React, { Component } from 'react';

export default class ListContent extends React.Component {
    render() {
        return (
            <div>
                <ol id="list-content">
                    <li id="c57aab79-7dfa-4d85-8ede-aa653a8b5d93" className="">
                        <input name="done-todo" type="checkbox" className="done-todo" /> Parking Lot APP Refactor </li>
                    <li id="00bd6227-e881-4024-ad7a-4212d930c947" className="checked">
                        <input name="done-todo" type="checkbox" className="done-todo" checked /> Parking Lot APP 时序图 </li>
                    <li id="8a134a9d-1df9-475a-ba5c-e27f9f003a99" className="">
                        <input name="done-todo" type="checkbox" className="done-todo" /> Parking Lot APP 中类的流程图 </li>
                    <li id="af51c0e0-97a4-4e78-9a31-48763fd6c089" className="checked">
                        <input name="done-todo" type="checkbox" className="done-todo" checked /> 总结Java和面向对象相关的概念和知识 </li>
                    <li id="cda424c4-7f16-4841-886a-0de60a395d34" className="">
                        <input name="done-todo" type="checkbox" className="done-todo" /> 总结Parking Lot APP开发过程中的问题和经验 </li>
                    <li id="4a44c65d-a933-402f-b2ee-f8c2dcafee79" className="">
                        <input name="done-todo" type="checkbox" className="done-todo" /> 总结TDD和Mock的应用经验 </li>
                </ol>
            </div>
        );
    }
}