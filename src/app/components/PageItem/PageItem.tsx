import { GriItems } from "@/app/data/gridItems";
import "./page-item.css";

type PageItemProps = {
  id: number;
  itemActive: number | null;
  item: GriItems;
};

const PageItem = ({ id, itemActive, item }: PageItemProps) => {
  return (
    <div
      className={
        id === itemActive
          ? `page-${id} page-item active`
          : `page-${id} page-item`
      }
    >
      <div className="page-content">
        <div className="content-header">
          <h1>{item.text}</h1>
        </div>
      </div>
    </div>
  );
};

export default PageItem;
