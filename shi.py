from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        def bfs(root):
            if not root:
                return []

            q = deque([root])
            result = []

            while q:
                level_size = len(q)
                level = []

                for _ in range(level_size):
                    node = q.popleft()
                    level.append(node.val)
                
                    if node.left:
                        q.append(node.left)
                    if node.right:
                        q.append(node.right)
                result.append(level)
            return result
        return bfs(root)

from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        def bfs(root):
            if not root:
                return []

            q = deque([root])
            result = []

            while q:
                level_size = len(q)
                level = []

                for _ in range(level_size):
                    node = q.popleft()
                    level.append(node.val)
                
                    if node.left:
                        q.append(node.left)
                    if node.right:
                        q.append(node.right)
                result.append(level[level_size - 1])
            return result
        return bfs(root)