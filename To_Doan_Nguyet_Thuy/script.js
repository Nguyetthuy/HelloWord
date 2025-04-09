document.addEventListener('DOMContentLoaded', function() {
    const pressMeButton = document.getElementById('pressMe');
    const teamMembersDiv = document.getElementById('teamMembers');
    const team = ["Phạm Thành Tín", "Tô Đoàn Nguyệt Thủy", "Đinh Thị Yến Nhi"];

    if (pressMeButton && teamMembersDiv) {
        pressMeButton.addEventListener('click', function() {
            teamMembersDiv.textContent = "Thành viên nhóm: " + team.join(", ");
        });
    } else {
        console.error("Không tìm thấy nút 'Press me' hoặc phần tử 'teamMembers'.");
    }
});