function ClientWrapper() {

}

function client(options) {
	var wrapper = new ClientWrapper();

	return {
		createClient: function (connection) {
			return wrapper.create(connection);
		}
	};
}

module.exports = client;
