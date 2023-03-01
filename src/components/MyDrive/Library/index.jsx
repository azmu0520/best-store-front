import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCollectionsContext } from "../../../context/Collections";
import Card from "../../Generic/Card";
import { Wrap, Filters } from "./style";

const Library = () => {
  const [abc, setAbc] = useState("All");
  const [{ data }, dispatch] = useCollectionsContext();
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <Wrap>
      <Filters>
        <Filters.Wrap>
          <Filters.Alphabet>
            {alphabet.map((i) => (
              <Filters.Letters onClick={() => setAbc(i)} active={abc == i}>
                {i}
              </Filters.Letters>
            ))}
            <Filters.Letters>#</Filters.Letters>
            <Filters.Letters
              onClick={() => setAbc("All")}
              active={abc == "All"}
            >
              All
            </Filters.Letters>
          </Filters.Alphabet>
          <Filters.Select
            showSearch
            placeholder="Select Topic"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </Filters.Wrap>
      </Filters>
      <Wrap.Cards>
        {data?.map((i) => (
          <NavLink
            to={i.name}
            onClick={() => dispatch({ type: "setCurrentItems", payload: i })}
          >
            <Card item={i} />
          </NavLink>
        ))}
      </Wrap.Cards>
    </Wrap>
  );
};

export default Library;
