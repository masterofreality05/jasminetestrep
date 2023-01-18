describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('create server object and add to allServers, update html and reset input', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
   
  });

  it('should create table row element and pass to appendTd function with input value',function(){
    submitServerInfo()
    
    expect(serverTbody.childElementCount).toEqual(1);
    let serverRow = document.getElementById('server1')
    //used to delete the table entry after it server has been added by test
    serverTbody.innerHTML = ''
  })

  afterEach(function() {
    allServers = {}
   
  });
});
