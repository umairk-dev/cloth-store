import React from "react";
import "./preview-collection.styles.scss";
import CollectoionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <div className="title">{title.toUpperCase()}</div>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectoionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);
export default CollectionPreview;
