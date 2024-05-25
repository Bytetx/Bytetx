class CustomNode<T> {
  public data: T;
  public next: CustomNode<T> | null;
  public prev: CustomNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList<T> {
  public head: CustomNode<T> | null;
  public current: CustomNode<T> | null;

  constructor() {
    this.head = null;
    this.current = null;
  }

  public insert(data: T): void {
    const newNode = new CustomNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.current = newNode;
    } else {
      let temp: CustomNode<T> | null = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
      newNode.prev = temp;
      this.current = newNode;
    }
  }
}

const storeData = new LinkedList();
export default storeData;

// Example usage
// const list = new LinkedList<number>();
// list.insert(1);
// list.insert(2);
// list.insert(3);
