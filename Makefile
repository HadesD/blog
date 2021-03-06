NPROCS := 1
OS := $(shell uname -s)

ifeq ($(PORT),)
  PORT := 9081
endif

ifeq ($(OS), Linux)
  NPROCS := $(shell grep -c ^processor /proc/cpuinfo)
endif
ifeq ($(OS), Darwin)
  NPROCS := $(shell system_profiler | awk '/Number Of CPUs/{print $4}{next;}')
endif

$(info Platform ${OS})
$(info Use TCP/IP Port ${PORT})
$(info Use ${NPROCS} CPUs)

.PHONY: build

default: dev

# Dev
dev:
	cd build \
	  && cmake .. -DCMAKE_BUILD_TYPE=Debug \
	  && make -j ${NPROCS}
	cd bin/Debug \
	  && PORT=${PORT} ./WebApp

build: prd npm.prd db
	cd bin/Release && \
	  PORT=${PORT} ./WebApp

prd:
	cd build && \
	  cmake .. -DCMAKE_BUILD_TYPE=Release && \
	  make -j ${NPROCS}

npm.dev:
	npm run dev --report

npm.prd:
	npm run build --report

db:
	python tools/create_database.py

rm:
	git clean -xdf ./bin

clean:
	git clean -xdf ./bin ./build

