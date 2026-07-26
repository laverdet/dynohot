FROM debian:sid
RUN <<DONE
	set -eux
	apt update
	apt install -y \
		curl \
		entr \
		git \
		jq \
		libatomic1 \
		locales-all \
		man \
		procps \
		vim \
	;
DONE
