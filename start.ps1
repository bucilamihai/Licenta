Start-Job -ScriptBlock {
    Set-Location "app/backend"
    ./gradlew bootRun
}

Start-Job -ScriptBlock {
    Set-Location "app/frontend"
    ionic serve
}

Get-Job

Write-Host "`nBackend and frontend are running in background jobs."
Write-Host "Use 'Get-Job' to see them, 'Receive-Job -Id <ID>' to see output, and 'Stop-Job -Id <ID>' to stop."
