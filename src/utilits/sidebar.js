import Generic from "../components/Generic";
import AddCollection from "../components/MyDrive/AddCollection";
import AddItems from "../components/MyDrive/AddItems";
import Library from "../components/MyDrive/Library";

export const sidebar = [
  {
    id: 1,
    title: "Library",
    path: "library",
    Component: Library,
  },
  {
    id: 2,
    title: "Add Items",
    path: "add-items",
    Component: AddItems,
  },
  {
    id: 3,
    title: "Add Collection",
    path: "add-collection",
    Component: AddCollection,
  },
];
