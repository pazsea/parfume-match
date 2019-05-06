
import React from 'react';
import './Post.css';
import Button from './Button'

const Post = ({ post, columns, toggleModal, IdClicked }) => {
  const {
    task,
    id,
    status,
    created_at,
  } = post;

  return (
    <div className="post">
    <span style={{ width: columns.title.width }}>
        {task}
      </span>
      <span style={{ width: columns.author.width }}>
        {created_at}
      </span>
      <span style={{ width: columns.comments.width }}>
        {status}
      </span>
      <span style={{ width: columns.points.width }}>
      {id}
      </span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={() => {           
          toggleModal(); 
          IdClicked(id); 
          
        }}>
          Visa
        </ButtonInline>
      </span>
    </div>
  );
}

const ButtonInline = ({
    onClick,
    type = 'button',
    children
  }) =>
    <Button
      type={type}
      className="button-inline"
      onClick={onClick}
    >
      {children}
    </Button>


export default Post;