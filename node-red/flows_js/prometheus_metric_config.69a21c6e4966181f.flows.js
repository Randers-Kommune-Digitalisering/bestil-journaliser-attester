const Node = {
  "id": "69a21c6e4966181f",
  "type": "prometheus-metric-config",
  "name": "job_complete",
  "help": "Metrikken tæller antal af jobs som enten afsluttes eller fejler i applikationen.",
  "labels": "job_name, status, error_type",
  "mtype": "counter"
}

module.exports = Node;