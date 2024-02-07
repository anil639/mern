import MongoData from "./MongoDBData/MongoData";
import ReactData from "./React/ReactData";
import NodeData from "./NodeJs/NodeData";

const allData = [...MongoData, ...ReactData, ...NodeData];

export default allData;
