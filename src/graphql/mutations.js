import gql from 'graphql-tag'

const updateTask = gql`
    mutation updateTask($id: ID!, $title: String, $description: String, $due: Int, $completed: Boolean, $section: ID) {
		updateTask(id: $id, title: $title, description: $description, due: $due, completed: $completed, section: $section) {
			id
			title
			description
		}
	}
`
const deleteTask = gql`
    mutation deleteTask($id: ID!) {
		deleteTask(id: $id) {
			id
			title
		}
	}
`

// createProject(owners: [ID],title: String!): Project
const createProject = gql`
    mutation createProject($title: String!) {
		createProject(title: $title) {
			id
	
			owners {
				id
			}
			title
		}
	}
`

export { updateTask, deleteTask, createProject }