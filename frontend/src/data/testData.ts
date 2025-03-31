import { IQuestion, IAnswer } from "../interfaces/question";

export const questionData: IQuestion[] = [
  {
    name: "Maximum Sum Subarray of Size K",
    questionText:
      "Given an array of integers and a number k, find the maximum sum of a subarray of size k.",
    input: "[2, 1, 5, 1, 3, 2], k=3",
    output: "9",
    answer: "sw",
    info: "Subarray with maximum sum is [5, 1, 3]",
    explanation:
      "This problem is ideally solved using a sliding window approach. While a prefix sum could work, the sliding window is more efficient here with O(n) time complexity and O(1) space complexity. With sliding window, you'd maintain a window of size k and slide it through the array, keeping track of the current sum and the maximum sum seen so far. This avoids recalculating the sum for each window from scratch. Here's how the sliding window would work: 1. Calculate the sum of the first k elements. 2. As you slide the window, subtract the element going out and add the element coming in. 3. Update the maximum sum seen so far.",
  },
  {
    name: "Container With Most Water",
    questionText:
      "Given n non-negative integers representing the heights of bars where the width of each bar is 1, find two bars that together with the x-axis forms a container that holds the most water.",
    input: "[1,8,6,2,5,4,8,3,7]",
    output: "49",
    answer: "tp",
    info: "The container formed by bars at indices 1 and 8 holds the most water (min(8, 7) * (8 - 1) = 7 * 7 = 49)",
    explanation:
      "This is a classic two-pointer approach problem. The optimal solution uses two pointers starting from both ends of the array (left at the beginning, right at the end). Since the amount of water is determined by the shorter height × distance between points, you move the pointer with the smaller height inward at each step. The intuition is that if you move the pointer with the greater height, you can only decrease the container's capacity (since the water level is determined by the shorter height, and the width is decreasing). This gives you an O(n) time complexity solution, much better than the O(n²) brute force approach.",
  },
  {
    name: "Longest Substring Without Repeating Characters",
    questionText:
      "Given a string, find the length of the longest substring without repeating characters.",
    input: '"abcabcbb"',
    output: "3",
    answer: "sw",
    info: 'The longest substring is "abc", with length 3.',
    explanation:
      "This is a sliding window problem. The optimal approach uses a sliding window combined with a hash set or hash map to track characters: 1. You maintain a sliding window that represents the current substring without repeating characters. 2. Use a hash map/set to keep track of characters in the current window. 3. When you encounter a repeated character, you shrink the window from the left until the duplicate is removed. 4. Keep track of the maximum window size you've seen. This gives you an O(n) time complexity solution, where each character is processed at most twice (once when added to the window, once when removed).",
  },
  {
    name: "Merge K Sorted Lists",
    questionText:
      "You are given an array of k linked-lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    input: "lists = [[1,4,5],[1,3,4],[2,6]]",
    output: "[1,1,2,3,4,4,5,6]",
    answer: "hp",
    info: "The linked-lists are: [1->4->5, 1->3->4, 2->6]. Merging them into one sorted list: 1->1->2->3->4->4->5->6",
    explanation:
      "The most efficient algorithm pattern for this problem would be using a min-heap (priority queue). With a min-heap approach: 1. Initially put the first node from each list into a min-heap. 2. Extract the minimum element from the heap and add it to the result list. 3. If the extracted node has a next node, add that next node to the heap. 4. Repeat until the heap is empty. This gives O(n log k) time complexity where n is the total number of nodes and k is the number of lists. The heap operations cost O(log k) and we do this for each of the n nodes.",
  },
  {
    name: "Minimum Window Substring",
    questionText:
      "Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window, return an empty string.",
    input: 's = "ADOBECODEBANC", t = "ABC"',
    output: '"BANC"',
    answer: "sw",
    info: "The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t.",
    explanation:
      "This is a classic sliding window problem. The optimal approach is to use a sliding window with hash maps: 1. Use a hash map to count the frequency of characters in string t. 2. Use another hash map to track characters in the current window. 3. Expand the window (move right pointer) until you have all required characters. 4. When you have a valid window, try to minimize it by moving the left pointer. 5. Keep track of the smallest valid window you've found. This approach has O(n + m) time complexity where n and m are the lengths of strings s and t respectively.",
  },
  {
    name: "Find First and Last Position of Element in Sorted Array",
    questionText:
      "Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value. If the target is not found, return [-1, -1].",
    input: "nums = [5,7,7,8,8,10], target = 8",
    output: "[3,4]",
    answer: "bs",
    info: "The first position of 8 is at index 3 and the last position is at index 4.",
    explanation:
      "This problem is best solved using a binary search pattern. Since the array is already sorted, binary search is the optimal approach with O(log n) time complexity. The approach is to do two separate binary searches: 1. First binary search to find the leftmost/first occurrence of the target. 2. Second binary search to find the rightmost/last occurrence of the target. Each binary search runs in O(log n) time, so the overall time complexity remains O(log n).",
  },
  {
    name: "LRU Cache",
    questionText:
      "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class with: LRUCache(int capacity) - Initialize with positive size capacity, get(int key) - Return the value of the key if it exists, otherwise return -1, put(int key, int value) - Update value if key exists, otherwise add the key-value pair. When the cache reaches capacity, evict the least recently used key. The functions get and put must execute in O(1) time complexity.",
    input:
      "LRUCache lRUCache = new LRUCache(2); lRUCache.put(1, 1); lRUCache.put(2, 2); lRUCache.get(1); lRUCache.put(3, 3); lRUCache.get(2); lRUCache.put(4, 4); lRUCache.get(1); lRUCache.get(3); lRUCache.get(4);",
    output: "[null, null, null, 1, null, -1, null, -1, 3, 4]",
    answer: "dl",
    info: "The lRUCache implements the functionality of an LRU cache with the required operations.",
    explanation:
      "The optimal solution for an LRU Cache uses a hashmap combined with a doubly linked list. The hashmap provides O(1) lookups to quickly find items by key. The doubly linked list allows O(1) operations for moving an element to the 'most recently used' position, removing the 'least recently used' element, and inserting new elements. This combination allows all operations to be performed in O(1) time as required.",
  },
  {
    name: "Number of Islands",
    questionText:
      "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    input:
      'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
    output: "3",
    answer: "gt",
    info: "There are three islands in the grid.",
    explanation:
      "This problem is best solved using a graph traversal pattern, specifically either Depth-First Search (DFS) or Breadth-First Search (BFS). The approach is to: 1. Iterate through each cell in the grid. 2. When you find a '1' (land), start a DFS or BFS from that cell. 3. During the traversal, mark all connected land cells as visited (typically by changing them to '0' or using a separate visited set). 4. Count each traversal as one island. This effectively identifies and counts each connected component (island) in the grid. Both DFS and BFS work well here with the same time complexity of O(m×n) where m and n are the dimensions of the grid.",
  },
  {
    name: "Trapping Rain Water",
    questionText:
      "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
    output: "6",
    answer: "tp",
    info: "The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.",
    explanation:
      "The most efficient solution uses a two-pointer approach. You maintain two pointers (left and right) and two variables to track the maximum height seen so far from left and right. You move the pointer pointing to the lower height inward and calculate water trapped at each position based on the difference between the current height and the maximum height seen so far from that direction. This gives an O(n) time and O(1) space solution.",
  },
  {
    name: "Kth Largest Element in an Array",
    questionText:
      "Given an integer array nums and an integer k, return the kth largest element in the array.",
    input: "nums = [3,2,1,5,6,4], k = 2",
    output: "5",
    answer: "hp",
    info: "The 2nd largest element in the array is 5.",
    explanation:
      "This problem can be efficiently solved using a heap (priority queue). For the kth largest, you can use a min-heap of size k. Process each element in the array: if the heap size is less than k, add the element; if the current element is larger than the smallest element in the heap, remove the smallest and add the current element. After processing all elements, the top of the heap will be the kth largest element. This approach has O(n log k) time complexity. Alternatively, quickselect algorithm can solve this in O(n) average time complexity.",
  },
  {
    name: "Valid Palindrome",
    questionText:
      "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    input: 's = "A man, a plan, a canal: Panama"',
    output: "true",
    answer: "tp",
    info: '"amanaplanacanalpanama" is a palindrome.',
    explanation:
      "This problem is efficiently solved using a two-pointer approach. Initialize two pointers, one at the beginning and one at the end of the string. Move them towards each other, skipping non-alphanumeric characters. At each step, compare the characters (ignoring case) at both pointers. If any comparison fails, the string is not a palindrome. If the pointers meet or cross without finding any mismatch, the string is a palindrome. This gives an O(n) time complexity solution.",
  },
  {
    name: "Word Search",
    questionText:
      "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    input:
      'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
    output: "true",
    answer: "bt",
    info: 'The word "ABCCED" can be formed by starting at the top-left A and following a path.',
    explanation:
      "This problem is solved using backtracking, a form of depth-first search with state tracking. The approach is to: 1. Iterate through each cell in the board. 2. For each cell, if it matches the first character of the word, start a backtracking DFS. 3. In the DFS, recursively check adjacent cells for subsequent characters in the word. 4. Mark cells as visited during recursion and restore them when backtracking. 5. Return true if any starting position leads to a complete match. This has a time complexity of O(m*n*4^L) where m and n are the dimensions of the board and L is the length of the word.",
  },
  {
    name: "Longest Increasing Subsequence",
    questionText:
      "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    input: "nums = [10,9,2,5,3,7,101,18]",
    output: "4",
    answer: "dp",
    info: "The longest increasing subsequence is [2,3,7,101], therefore the length is 4.",
    explanation:
      "This problem can be solved using dynamic programming. Create a DP array where dp[i] represents the length of the longest increasing subsequence ending at index i. For each element, compare it with all previous elements to find subsequences that can be extended. The time complexity of this approach is O(n^2). A more efficient solution uses binary search with a patience sort approach, which has O(n log n) time complexity.",
  },
  {
    name: "Course Schedule",
    questionText:
      "There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites. Return true if you can finish all courses, otherwise return false.",
    input: "numCourses = 2, prerequisites = [[1,0]]",
    output: "true",
    answer: "tps",
    info: "There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.",
    explanation:
      "This problem involves detecting cycles in a directed graph, which can be solved using topological sort. Build an adjacency list and track in-degrees for each node. Use BFS starting with nodes having zero in-degree. For each visited node, reduce the in-degree of its neighbors. If you can visit all nodes, return true; otherwise, there's a cycle and it's impossible to finish all courses. The time complexity is O(V+E) where V is the number of courses and E is the number of prerequisites.",
  },
  {
    name: "Median of Two Sorted Arrays",
    questionText:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    input: "nums1 = [1,3], nums2 = [2]",
    output: "2.0",
    answer: "bs",
    info: "The merged array = [1,2,3] and the median is 2.",
    explanation:
      "The optimal solution uses binary search on the smaller of the two arrays. The idea is to find a partition in both arrays such that all elements to the left of the partition are less than or equal to all elements to the right. This partition gives us the median. The approach has O(log(min(m,n))) time complexity, which is much better than the O(m+n) approach of merging the arrays first.",
  },
  {
    name: "Implement Trie (Prefix Tree)",
    questionText:
      "Implement a trie with insert, search, and startsWith methods.",
    input:
      'Trie trie = new Trie(); trie.insert("apple"); trie.search("apple"); trie.search("app"); trie.startsWith("app"); trie.insert("app"); trie.search("app");',
    output: "[null, null, true, false, true, null, true]",
    answer: "tr",
    info: "The operations on the trie follow the expected behavior.",
    explanation:
      "This problem requires implementing a trie data structure, which is specialized for string operations. A trie is a tree-like data structure where each node represents a single character. Paths from the root to leaf nodes represent words in the dictionary. The implementation typically uses a TrieNode class with a children map/array and an isEndOfWord flag. Insert builds the trie path for a word, search checks if a word exists, and startsWith checks if there's any word with a given prefix. Operations typically have O(m) time complexity, where m is the length of the word.",
  },
  {
    name: "Serialize and Deserialize Binary Tree",
    questionText:
      "Design an algorithm to serialize and deserialize a binary tree. Serialization is the process of converting a data structure into a sequence of bits so that it can be stored in a file or memory buffer. Deserialization is the reverse process.",
    input: "root = [1,2,3,null,null,4,5]",
    output: "[1,2,3,null,null,4,5]",
    answer: "bt",
    info: "The tree is serialized and then deserialized back to the same structure.",
    explanation:
      "This problem requires tree traversal techniques. Typically, a preorder traversal (root, left, right) is used for serialization with special markers for null nodes. For deserialization, you parse the serialized string and reconstruct the tree following the same traversal order. The time complexity for both operations is O(n) where n is the number of nodes in the tree.",
  },
];

export const answers: IAnswer[] = [
  {
    id: "sw",
    ans: "sliding window",
  },
  {
    id: "tp",
    ans: "two pointers",
  },
  {
    id: "bs",
    ans: "binary search",
  },
  {
    id: "hp",
    ans: "heap / priority queue",
  },
  {
    id: "dl",
    ans: "doubly linked list",
  },
  {
    id: "gt",
    ans: "graph traversal",
  },
  {
    id: "bt",
    ans: "backtracking",
  },
  {
    id: "dp",
    ans: "dynamic programming",
  },
  {
    id: "tps",
    ans: "topological sort",
  },
  {
    id: "tr",
    ans: "trie",
  },
];
