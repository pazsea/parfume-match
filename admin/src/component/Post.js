import React from 'react';
import './Post.css';
import Button from './Button';

const Post = ({ post, columns, toggleModal, IdClicked }) => {
  const { name, item_id, brand, man_address } = post;

  return (
    <div className="post">
      <span style={{ width: columns.item_id.width }}>{item_id}</span>

      <span style={{ width: columns.name.width }}>{name}</span>

      <span style={{ width: columns.brand.width }}>{brand}</span>
      <span style={{ width: columns.man_address.width }}>
        {man_address}
      </span>
      <span style={{ width: columns.button.width }}>
        <ButtonInline
          onClick={() => {
            toggleModal();
            IdClicked(item_id);
          }}
        >
          Visa
        </ButtonInline>
      </span>
    </div>
  );
};

const ButtonInline = ({ onClick, type = 'button', children }) => (
  <Button type={type} className="button-inline" onClick={onClick}>
    {children}
  </Button>
);

export default Post;
