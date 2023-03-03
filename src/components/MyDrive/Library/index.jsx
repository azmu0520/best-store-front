import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCollectionsContext } from "../../../context/Collections";
import useRequest from "../../../hooks/useRequest";
import Card from "../../Generic/Card";
import { Wrap, Filters } from "./style";

const Library = () => {
  const [abc, setAbc] = useState("All");
  const [topics, setTopics] = useState([]);
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

  const { request } = useRequest();
  const handleFilter = (a) => {
    setAbc(a);
    dispatch({ type: "setAlphabitFilter", payload: a });
  };

  useEffect(() => {
    request({
      url: "/api/topics",
    }).then((res) => {
      if (res?.status == "success") {
        setTopics(
          res?.data.map((i) =>
            Object.assign({}, { value: i.name, label: i.name })
          )
        );
      }
    });
  }, []);
  const handleSelect = (e) => {
    console.log(e);
    dispatch({ type: "setTopicSort", payload: e });
  };
  return (
    <Wrap>
      <Filters>
        <Filters.Wrap>
          <Filters.Alphabet>
            {alphabet.map((i) => (
              <Filters.Letters
                onClick={() => handleFilter(i)}
                active={abc == i}
              >
                {i}
              </Filters.Letters>
            ))}
            <Filters.Letters>#</Filters.Letters>
            <Filters.Letters
              onClick={() => handleFilter("All")}
              active={abc == "All"}
            >
              All
            </Filters.Letters>
          </Filters.Alphabet>
          <Filters.Select
            showSearch
            placeholder="Select Topic"
            optionFilterProp="children"
            onSelect={handleSelect}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            allowClear
            options={topics}
            onClear={() => handleSelect("All")}
          />
        </Filters.Wrap>
      </Filters>
      <Wrap.Cards>
        {data?.length ? (
          data?.map((i) => <Card key={i?._id} item={i} />)
        ) : (
          <Wrap.NoItems>
            <span>There is no items yet!</span>
          </Wrap.NoItems>
        )}
      </Wrap.Cards>
    </Wrap>
  );
};

export default Library;
