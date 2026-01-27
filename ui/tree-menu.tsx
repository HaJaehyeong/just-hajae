'use client';
import { TreeNode } from '@/types/types';
import { RiArrowDownSLine, RiArrowRightSLine } from '@remixicon/react';
import { useState } from 'react';
import styles from './tree-menu.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TreeMenuProps {
  nodes: TreeNode[];
}

export default function TreeMenu({ nodes }: TreeMenuProps) {
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
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const hasChild = !!(node.children && node.children.length > 0);

  return (
    <div className={styles['node']}>
      <Link
        className={`${styles['node__parents']} ${node.isBold ? styles['bold'] : ''} ${
          pathname === node.url ? styles['active'] : ''
        }`}
        onClick={() => hasChild && setIsOpen((prev) => !prev)}
        href={node.url}
      >
        {node.label}
        {hasChild && (isOpen ? <RiArrowDownSLine size={20} /> : <RiArrowRightSLine size={20} />)}
      </Link>

      {hasChild && (
        <div
          className={`${styles['node__children']} ${isOpen ? styles['node__children--open'] : ''} ${
            pathname === node.url ? styles['active'] : ''
          }`}
        >
          <TreeMenu nodes={node.children!} />
        </div>
      )}
    </div>
  );
}
