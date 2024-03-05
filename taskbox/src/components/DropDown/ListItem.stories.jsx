import ListItem from "./ListItem";

export default {
  component: ListItem,
  title: "ListItem",
  tags: ["autodocs"],
}

export const Default = {
  args: {
    listItem: {
      id: "1",
      title: "Test List Item 1",
      children: "Test List Item children text"
    }
  }
}

export const Open = {
  args: {
    listItem: {
      ...Default.args.listItem,
    }
  }
}
