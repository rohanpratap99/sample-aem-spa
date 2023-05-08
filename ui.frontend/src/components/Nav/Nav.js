class NavItem extends Component {
    render() {
        if(!this.props.path || !this.props.title || !this.props.url) {
            return null;
        }

        let url = this.props.url;

        url = url.substring(PROJECT_URL_ROOT.length);

        return (
<li className="NavItem" key={this.props.path}>
<Link className="NavItem-link" to={url}>
                        {this.props.title}
</Link>
</li>
        );
    }
}