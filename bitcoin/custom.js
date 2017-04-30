$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,
		
		{
  "name": "BTC.main",
  "height": 464228,
  "hash": "00000000000000000004ffa46e1056a7474635c7120aaf065995e269efaa4cbf",
  "time": "2017-04-30T17:39:20.72668452Z",
  "latest_url": "https://api.blockcypher.com/v1/btc/main/blocks/00000000000000000004ffa46e1056a7474635c7120aaf065995e269efaa4cbf",
  "previous_hash": "00000000000000000057a19b01efd2e45056e6dc1c0644e4fe25f0be9547a951",
  "previous_url": "https://api.blockcypher.com/v1/btc/main/blocks/00000000000000000057a19b01efd2e45056e6dc1c0644e4fe25f0be9547a951",
  "peer_count": 360,
  "unconfirmed_count": 13961,
  "high_fee_per_kb": 189500,
  "medium_fee_per_kb": 128314,
  "low_fee_per_kb": 94998,
  "last_fork_height": 461246,
  "last_fork_hash": "0000000000000000003c6fe479122bfa4a9187493937af1734e1e5cd9f198ec7"
}

		success : function(data) {
			$('#bitcoin_block_number').append(data.height);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
		}
	});
});
