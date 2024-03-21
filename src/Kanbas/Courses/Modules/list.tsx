import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <>
            {<div>
                <button>Collapse All</button>
                <button>View Progress</button>
                <select className="selectbt">
                    <option>Publish All</option>
                    <option>Publish All Modules and Items</option>
                    <option>Publish Modules Only</option>
                    <option>Unpublish All</option>
                </select>
                <button className="btnco">+ Module</button>
            </div>}
            <ul className="list-group">
                <li className="list-group-item">

                    <button 
                    onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add</button>
                    <button 
                       onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>

                    <input value={module.name}
                        onChange={(e) => 
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }/>

                    <textarea value={module.description}
                        onChange={(e) => 
                            dispatch(setModule({ ...module, description: e.target.value }))
                        }
                    />
                </li>
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <button
                                onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>

                            <button
                                 onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>

                            <div>
                                <h4>{module.name}</h4>
                                <p>{module.description}</p>
                                <p>{module._id}</p>
                            </div>
                      
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;