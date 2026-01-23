'use client';
import { TreeNode } from '@/types/types';
import { RiArrowDownSLine, RiArrowRightSLine } from '@remixicon/react';
import { useState } from 'react';
import styles from './tree-menu.module.scss';

interface TreeMenuProps {
  nodes: TreeNode[];
  isChildren?: boolean;
}

export default function TreeMenu({ nodes, isChildren = false }: TreeMenuProps) {
  return (
    <div className={`${styles['wrapper']} ${styles['children']}`}>
      {nodes.map((node) => (
        <TreeItem key={node.id} node={node} />
      ))}
    </div>
  );
}

interface TreeItemProps {
  node: TreeNode;
}

function TreeItem({ node }: TreeItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChild = node.children && node.children.length > 0;

  return (
    <div className={styles['node']}>
      <div
        className={`${styles['node__parents']} ${node.isBold ? styles['bold'] : ''}`}
        onClick={() => hasChild && setIsOpen((prev) => !prev)}
      >
        <span>{node.label}</span>
        {hasChild && (isOpen ? <RiArrowDownSLine size={20} /> : <RiArrowRightSLine size={20} />)}
      </div>

      {hasChild && (
        <div
          className={`${styles['node__children']} ${isOpen ? styles['node__children--open'] : ''}`}
        >
          <TreeMenu nodes={node.children!} isChildren />
        </div>
      )}
    </div>
  );
}
