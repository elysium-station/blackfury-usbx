package client

import (
	govclient "github.com/cosmos/cosmos-sdk/x/gov/client"
	"github.com/elysiumstation/blackfury/x/oracle/client/cli"
	"github.com/elysiumstation/blackfury/x/oracle/client/rest"
)

var (
	RegisterTargetProposalHandler = govclient.NewProposalHandler(cli.NewRegisterTargetProposalCmd, rest.RegisterTargetProposalRESTHandler)
)
